import React, { useEffect, useRef, useState } from 'react';
import { X, Download, Trash2 } from 'lucide-react';
import '../styles/getModal.css';
import { getCookieForEntity } from "../util/axios";

function GetModal({ onClose }) {
    const modalRef = useRef();
    const [files, setFiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        let token = getCookieForEntity("token", "token");
        if (token?.startsWith("Bearer ")) token = token.replace("Bearer ", "");

        try {
            const response = await fetch('http://localhost:5000/api/uploads', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (Array.isArray(data)) {
                setFiles(data);
            } else {
                console.error('Expected array but got:', data);
                setFiles([]);
            }
        } catch (error) {
            console.error('Error fetching files:', error);
            setFiles([]);
        }
    };



    const closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    const handleDownload = async (fileName) => {
        let token = getCookieForEntity("token", "token");
        if (token?.startsWith("Bearer ")) token = token.replace("Bearer ", "");

        try {
            const response = await fetch(`http://localhost:5000/api/uploads/download/${fileName}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
            alert('Download failed');
        }
    };


    const handleDelete = async (fileName) => {
        if (!window.confirm(`Delete ${fileName}?`)) return;

        let token = getCookieForEntity("token", "token");
        if (token?.startsWith("Bearer ")) token = token.replace("Bearer ", "");

        try {
            const response = await fetch(`http://localhost:5000/api/uploads/${fileName}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                setFiles(files.filter(file => file.name !== fileName));
            } else {
                alert('Delete failed');
            }
        } catch (error) {
            console.error('Delete error:', error);
        }
    };


    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div onClick={closeModal} className="modal-background">
            <div ref={modalRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    <X size={30} />
                </button>
                <h1 className="modal-heading">Uploaded Files</h1>
                <input
                    type="text"
                    placeholder="Search files..."
                    className="search-box"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <table className="file-table">
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Created Date</th>
                            <th>Created Time</th>
                            <th>Download</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFiles.map((file, index) => {
                            const created = new Date(file.createdAt);
                            return (
                                <tr key={index}>
                                    <td>{file.name}</td>
                                    <td>{created.toLocaleDateString()}</td>
                                    <td>{created.toLocaleTimeString()}</td>
                                    <td>
                                        <button
                                            className="download-button"
                                            onClick={() => handleDownload(file.name)}

                                        >
                                            <Download size={16} />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(file.name)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GetModal;

"use client"

import { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props { }

const Banner: NextPage<Props> = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!selectedFile) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await fetch('http://localhost:3100/api/banner/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('File uploaded successfully');
            setSelectedFile(null);
        } else {
            console.error('File upload failed');
        }
    };

    console.log(selectedFile);

    return <div className='container py-10'>
        <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
            <input type="file" name="banners" id="banners" onChange={handleFileChange} />
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>

        </form>
    </div>
}

export default Banner
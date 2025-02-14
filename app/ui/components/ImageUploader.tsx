"use client"
import React, { useState, useRef } from 'react';

interface ImageUploaderProps {
  label: string;
  onChange?: (file: File) => void;
}

export default function ImageUploader({ label, onChange }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    onChange?.(file);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-sm font-medium text-gray-400">
        <h2>{label}</h2>
      </label>
      
      <div
        onClick={openFileDialog}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          relative
          border-2 border-dashed rounded-lg
          p-4
          text-center
          cursor-pointer
          transition-colors
          ${dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        
        <div className="space-y-2">
          <div className="text-gray-600">
            <span className="font-medium">
              Cliquez pour sélectionner
            </span>
            {' '}ou glissez-déposez
          </div>
          <p className="text-sm text-gray-500">
            PNG, JPG, GIF jusqu'à 10MB
          </p>
        </div>
      </div>

      {image && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Prévisualisation"
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  );
}
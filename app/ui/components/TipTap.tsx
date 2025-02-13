"use client";

import Bold from "@tiptap/extension-bold";
import Code from "@tiptap/extension-code";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Image from '@tiptap/extension-image'
import Text from "@tiptap/extension-text";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useCallback, useState } from "react";
import { ChevronDown, ImageIcon } from "lucide-react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Bold,
      Code,
      Italic,
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'w-full h-[70vh] object-cover',
        },
      })
    ],
    content: ``,
  });
  const [isOpen, setIsOpen] = useState(false);

  const getHeadingLevel = () => {
    if (!editor) return "Normal";
    if (editor.isActive("heading", { level: 1 })) return "H1";
    if (editor.isActive("heading", { level: 2 })) return "H2";
    if (editor.isActive("heading", { level: 3 })) return "H3";
    return "Normal";
  };
  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="w-full mt-4 ">
      <div className="w-full flex gap-2 items-center justify-start relative rounded-lg rounded-b-none border-[.5px] border-gray-500 p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-32 px-4 py-2 border border-gray-500 rounded-md flex justify-between items-center"
        >
          {getHeadingLevel()} <ChevronDown size={16} />
        </button>
        {/* Liste déroulante */}
        {isOpen && (
          <div className="absolute z-30 left-0 mt-2 w-32 bg-white border border-gray-500 rounded-md shadow-lg">
            {["Normal", "H1", "H2", "H3"].map((level) => (
              <div
                key={level}
                onClick={() => {
                  setIsOpen(false);
                  if (editor) {
                    if (level === "Normal") {
                      editor.chain().focus().clearNodes().run();
                    } else {
                      editor
                        .chain()
                        .focus()
                        .toggleHeading({ level: parseInt(level[1]) as any })
                        .run();
                    }
                  }
                }}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {level}
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => editor && editor.chain().focus().toggleBold().run()}
          className={`w-10 h-10 text-center rounded-md ${
            editor?.isActive("bold")
              ? "border-black bg-white"
              : "border-transparent"
          }`}
        >
          B
        </button>
        <button
          onClick={() => editor && editor.chain().focus().toggleCode().run()}
          className={`w-10 h-10 text-center rounded-md ${
            editor?.isActive("code")
              ? "border-black bg-white"
              : "border-transparent"
          }`}
        >
          {"< />"}
        </button>
        <button
          onClick={() => editor && editor.chain().focus().toggleItalic().run()}
          className={`w-10 h-10 text-center rounded-md italic ${
            editor?.isActive("italic")
              ? "border-black bg-white"
              : "border-transparent"
          }`}
        >
          I
        </button>
        <button
          onClick={() =>
            editor && editor.chain().focus().toggleUnderline().run()
          }
          className={`w-10 h-10 text-center rounded-md underline ${
            editor?.isActive("underline")
              ? "border-black bg-white"
              : "border-transparent"
          }`}
        >
          U
        </button>
        <div className="button-group">
          <button onClick={addImage}><ImageIcon /></button>
        </div>
      </div>

      <EditorContent placeholder="Contenu..."
  className="rounded-lg overflow-y-auto rounded-t-none !border-t-0 border-l-[.5px] border-r-[.5px] border-b-[.5px] border-gray-500 p-4 min-h-[300px] focus:ring-0 focus:border-0 focus:outline-none"
  editor={editor}
/>
    </div>
  );
};

export default Tiptap;

"use client"
import React from 'react';
import { Edit2, Trash2, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/components/Avatar';
import { Button } from '@/app/ui/components/Button';
import { CardContent, Card } from '@/app/ui/components/Card';

interface Author {
  name: string;
  avatar: string;
  role?: string;
}

interface Comment {
  id: number;
  author: Author;
  content: string;
  date: string;
}

interface Article {
  coverImage: string;
  title: string;
  author: Author;
  publishedAt: string;
  content: string;
  comments: Comment[];
}

const BlogArticle: React.FC = () => {
  const [likes, setLikes] = React.useState<number>(42);

  // Données exemple
  const article: Article = {
    coverImage: "/images/setup.jpg",
    title: "Comment maîtriser React en 2024",
    author: {
      name: "Marie Dupont",
      avatar: "/images/avatar.webp",
      role: "Développeuse Frontend"
    },
    publishedAt: "14 Feb 2024",
    content: `
      <h1>Introduction</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <img src="/images/setup.jpg" alt="React example" />
      <h2>Les fondamentaux</h2>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
    `,
    comments: [
      {
        id: 1,
        author: {
          name: "Jean Martin",
          avatar: "/images/avatar.webp"
        },
        content: "Article très instructif, merci !",
        date: "14 Feb 2024"
      }
    ]
  };

  const handleLike = (): void => {
    setLikes(prev => prev + 1);
  };

  const handleDeleteComment = (commentId: number): void => {
    console.log('Suppression du commentaire:', commentId);
  };

  const handleEditComment = (commentId: number): void => {
    console.log('Édition du commentaire:', commentId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Couverture */}
      <div className="relative h-96 mb-8">
        <img 
          src={article.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={article.author.avatar} />
              {!article.author.avatar && <AvatarFallback className='mt-5'>{article.author.name[0]}</AvatarFallback>}
            </Avatar>
            <div>
              <p className="text-white font-medium">{article.author.name}</p>
              <p className="text-white/80 text-sm">{article.publishedAt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div 
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Likes */}
      <div className="flex items-center space-x-2 mb-8">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleLike}
          className="flex items-center space-x-2"
        >
          <ThumbsUp size={16} />
          <span>{likes}</span>
        </Button>
      </div>

      {/* Commentaires */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Commentaires</h2>
        {article.comments.map(comment => (
          <Card key={comment.id}>
            <CardContent>
              <div className="flex justify-between items-start">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src={comment.author.avatar} />
                   {!comment.author.avatar && <AvatarFallback>{comment.author.name[0]}</AvatarFallback>}
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-700">{comment.author.name}</p>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                    <p className="mt-2 text-gray-600">{comment.content}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => handleEditComment(comment.id)}
                  >
                    <Edit2 size={16} />
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogArticle;
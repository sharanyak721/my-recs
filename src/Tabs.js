import React, { useState } from "react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
import "./App.css";
function Blog({ url, title, author }) {
  return (
    <div className="blogs">
      <h2>
        <a href={url} target="_blank" className="blog-title">
          {title}
        </a>
      </h2>
      <p className="blog-author">{author}</p>
    </div>
  );
}

function Book({ title, author, rating, description }) {
  return (
    <div className="book">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
      <p className="book-rating">{rating}</p>
      <p className="book-desp">{description}</p>
    </div>
  );
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navsection">
      <div className="navbar">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabChange('tab1')}>Fiction</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabChange('tab2')}>Non-Fiction</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabChange('tab3')}>Curated</button>
      </div>

      <div>
        {activeTab === 'tab1' && (
          <div className="book-list">
            {TabOne.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                description={book.desp}
              />
            ))}
          </div>
        )}

        {activeTab === 'tab2' && (
          <div className="book-list">
            {TabTwo.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                description={book.desp}
              />
            ))}
          </div>
        )}

        {activeTab === 'tab3' && (
          <div className="blog-list">
            {TabThree.map((blog) => (
              <Blog
                key={blog.Id}
                url={blog.url}
                title={blog.title}
                author={blog.author}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;


import React from "react";
import "./style.css";

const SavedBook = props => {
    return (
        <div className="savedBox">
            <h2>Favorites</h2>
            {props.savedBooks.map(savedbook => {
                return (
                    <div>
                        <div className="card mb-2">
                            <div className="card-body">
                                <div id={savedbook.title + "Card"} key={savedbook._id}>
                                    <div className="imageStyling">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </div>
                                    <br></br>
                                    <div>
                                        <h3 className="bookTitle">{savedbook.title}</h3>
                                        <h4 className="bookAuthors">{savedbook.authors}</h4>
                                        <br></br>
                                        <p className="bookDescription pr-3">{savedbook.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="delete btn mt-4 ml-3 mr-1" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete this book
                                    </button>
                                    {/* "noopener noreferrer" for website security */}
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                                        <button className="view btn mt-4">
                                            View this book
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default SavedBook;
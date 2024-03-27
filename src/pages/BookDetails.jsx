import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({})
    const books = useLoaderData()
    const { bookId } = useParams()

    useEffect(() => {
        const book = books.find(book => book.bookId === +bookId)
        console.log(book)
        setSingleBook(book)
    }, [books, bookId])

    console.log(singleBook)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook

    return (
        <div className="p-8">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">{review}</p>
                       
                        <div className="flex gap-4">
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
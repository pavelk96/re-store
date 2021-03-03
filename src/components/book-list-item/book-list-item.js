import React, {Fragment} from 'react';
import './book-list-item.css';

const BookListItem = ({book}) => {
    const { title, author} = book;
    return (
        <Fragment>
            {title}
            {author}
        </Fragment>
    );
};

export default BookListItem;
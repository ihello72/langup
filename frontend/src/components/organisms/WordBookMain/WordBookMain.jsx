import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WordBookBlock from '../../molecules/WordBookBlock';

const Container = styled.div`
    width: 100%;
`;

class WordBookMain extends Component {
    render() {
        const myBookList = this.props.list.map(
            (data, i) => {
                i++;

                if (i % 3 === 0) {
                    return <Link to={`/book/${data.idx}`}>
                        <WordBookBlock
                            idx={data.idx}
                            title={data.title}
                            userEmail={data.user_email}
                            createDate={data.create_date}
                            bookImage={data.book_image}
                            profileImage={this.props.profileImage}
                            right="0"
                        />
                    </Link>
                }

                return <Link to={`/book/${data.idx}`}>
                    <WordBookBlock
                        idx={data.idx}
                        title={data.title}
                        userEmail={data.user_email}
                        createDate={data.create_date}
                        bookImage={data.book_image}
                        profileImage={this.props.profileImage}
                    />
                </Link>

                // return <WordBookBlock
                //     idx={data.idx}
                //     title={data.title}
                //     userEmail={data.user_email}
                //     createDate={data.create_date}
                // />
            }
        );

        return (
            <Container>
                {myBookList}
            </Container>
        );
    }
};

export default WordBookMain;
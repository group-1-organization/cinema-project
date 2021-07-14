import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Discussion from '../components/discussion-board/Discussion';
import Topic from '../components/discussion-board/Topic';
import Comment from '../components/discussion-board/Comment';
import CommentForm from '../components/discussion-board/CommentForm';
import Comments from '../components/discussion-board/Comments';
import Rating from '../components/discussion-board/Rating';
import RatingForm from '../components/discussion-board/RatingForm';
import TopicCard from '../components/discussion-board/TopicCard';
import TopicForm from '../components/discussion-board/TopicForm';
import Topics from '../components/discussion-board/Topics';

test('Discussion page matches snapshot', () => {
    const tree = renderer.create(<Discussion />);

    expect(tree).toMatchSnapshot();
});

// test('Topic matches snapshot', () => {
//   const tree = renderer.create(<Topic />);

//   expect(tree).toMatchSnapshot();
// });


test('Comment matches snapshot', () => {

    const comment = {
        _id: "60eee726bef3502694dca9f5",
        topicId: "60eee716bef3502694dca9ea",
        message: "Comments ****",
        author: "Amandeep",
        createdAt: "2021-07-14T13:31:18.612Z",
        updatedAt: "2021-07-14T13:31:18.612Z"

    }
    const tree = renderer.create(<Comment comment={comment} />);

    expect(tree).toMatchSnapshot();
});

test('Comment form matches snapshot', () => {
    const tree = renderer.create(<CommentForm />);

    expect(tree).toMatchSnapshot();
});

test('Comments matches snapshot', () => {
    const tree = renderer.create(<Comments />);

    expect(tree).toMatchSnapshot();
});

test('Rating matches snapshot', () => {
    const tree = renderer.create(<Rating />);

    expect(tree).toMatchSnapshot();
});

// test('Rating form matches snapshot', () => {

//   const topic = {
//     _id: "60eee716bef3502694dca9ea",
//     name: "New components",
//     movieName: "Fast & Furious 9",
//     author: "Amandeep",
//     createdAt: "2021-07-14T13:31:02.653Z",
//     updatedAt: "2021-07-14T13:31:02.653Z"
//   }
//   const tree = renderer.create(<RatingForm topic={topic} />);

//   expect(tree).toMatchSnapshot();
// });

// test('TopicCard matches snapshot', () => {

//   const topic = {
//     _id: "60eee716bef3502694dca9ea",
//     name: "New components",
//     movieName: "Fast & Furious 9",
//     author: "Amandeep",
//     createdAt: "2021-07-14T13:31:02.653Z",
//     updatedAt: "2021-07-14T13:31:02.653Z"

//   }
//   const tree = renderer.create(<Router><TopicCard topic={topic} /></Router>);

//   expect(tree).toMatchSnapshot();
// });

// test('TopicForm matches snapshot', () => {

//     // act(() => {
//     //   const topic = {
//     //     _id: "60eecf74bef3502694dca968",
//     //     name: "2nd Topic",
//     //     movieName: "In The Heights",
//     //     author: "Scott",
//     //     // createdAt: "2021-07-14T11:50:12.108Z",
//     //     // updatedAt: "2021-07-14T11:50:12.108Z"

//     //   }
//     //   const tree = renderer.create(<TopicForm topic={topic} />);
//     // })

//     const topic = {
//         _id: "60eecf74bef3502694dca968",
//         name: "2nd Topic",
//         movieName: "In The Heights",
//         author: "Scott",
//         createdAt: "2021-07-14T11:50:12.108Z",
//         updatedAt: "2021-07-14T11:50:12.108Z"

//     }
//     const tree = renderer.create(<TopicForm topic={topic} />);

//     expect(tree).toMatchSnapshot();
// });

// test('Topics matches snapshot', () => {


//   const tree = renderer.create(<Topics />);

//   expect(tree).toMatchSnapshot();
// });
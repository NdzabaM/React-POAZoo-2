import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import SubmitPost from './SubmitPost';
import PostPage from './PostPage';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {format} from 'date-fns';

function App() {
    const [posts, setPosts] = useState ([
        {
            id: 1,
            title: "Meet Benson",
            dateTime: "25 February 2022 10:25am",
            body: "Benson is our favourite 10 year old monkey! Discovered in the Amazon, Benson was abandoned in a forest fire and was rescued by the Widlife Protection Federation."
        },
        {
            id: 2,
            title: "Meet Mooshoo",
            dateTime: "25 February 2022 10:25am",
            body: "Odd name for a Leopard, but once you meet this adorable feline you'll understand. Hailing from the wildlands of Kenya, Mooshoo loves to interact with humans, and welcomes hugs!"
        },
        {
            id: 3,
            title: "Meet Lizzy",
            dateTime: "25 February 2022 10:25am",
            body: "Our beautifully striped zebra is a peaceful member of the POA Zoo. We found her in Sub-saharan Africa when she was 2 months old. Now she's 3 and growing ever stronger!"
        },
    ]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        const filteredResults = posts.filter(post =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

            setSearchResults(filteredResults.reverse());
    },[posts, search])

    const handleSubmit = (e)=> {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'dd MMMM, yyyy pp');
        const newPost = {id, title: postTitle, datetime, body: postBody};
        const allPosts = [...posts, newPost]
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
    }
    

    return (
    <div className="App">
        <Header title="POA Zoo | Official Site"/>
        <Nav search={search} setSearch={setSearch} />
        <Routes>
         <Route path="/" element={<Home posts={searchResults} />} />
         <Route path="/post" 
         element={
         <SubmitPost handleSubmit={handleSubmit}
                  postTitle={postTitle}
                  setPostTitle={setPostTitle}
                  postBody={postBody}
                  setPostBody={setPostBody}
         />
           } />
         <Route path="/post/:id" element={<PostPage posts={posts}/>} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="*" component={Missing} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

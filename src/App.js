import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import Post from './Post';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import EditPosts from "./EditPosts"
import { DataProvider } from './contaxt/DataContaxt';

// function App() {

//   return (
//     <>
//     <div className='App'>
//       {/* Routers */}
//       {/* <nav>
//         <NavLink to='/'>Home</NavLink>
//         <NavLink to='/about'>About</NavLink>
//         <NavLink to='/postpage'>PostPage</NavLink>
//       </nav> */}
//        {/* <Routes> */}
//           {/* Basic routes */}
//           {/* <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />}/> */}
//           {/* <Route path='/postpage' element={<PostPage />}/>

//           {/* URL parameter routes using useParams() (Hook) */}
//           {/* <Route path='/postpage/:id' element={<Post />} /> */}

//           {/* hardcore path. path using inside of another path */}
//           {/* <Route path='/postpage/newpost' element={<NewPost />}/> */}

//           {/* created for path missing or error in any wholepage */}
//           {/* <Route path='*' element={<Missing />}/> */}

//           {/* nested routing */}
//           {/* <Route path='/postpage' element={<PostLayout />}>
//               <Route index element={<PostPage />}/>
//               <Route path=':id' element={<Post />}/>
//               <Route path='newpost' element={<NewPost />}/>
//           </ Route> */}
//        {/* </Routes> */}
//     </div>
//     </>
//   );
// }
// export default App;


function App() {
 

  return (
    <>
    <div className='App'>
      <DataProvider>
          <Header title='Social Media'/>
          <Nav />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post'>
                    <Route index  element={<NewPost />} />
                  
                    <Route path=':id' element={<PostPage />} />
                </Route>
                <Route path='/edit/:id' element={<EditPosts />} />
                
                <Route path='/about' element={<About />} />
                
                <Route path='*' element={<Missing />} />
            </Routes>
            <Footer />
        </DataProvider>
    </div>
    </>
  );
}

export default App;

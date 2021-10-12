import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostingNav from '../components/PostingNav';
import Summery from '../components/Summary';
import { CKEditor } from 'ckeditor4-react';
import Footer from '../components/Footer';

function Posting() {

  const [post, setPost] = useState('');
  
  // function --> 기존 데이터 DB에 얘도 추가시키는 함수...How?

  return (
    <>
      <PostingNav />
      
      <div class="PostingImgFinder">
        <input type="file" />
        <input type="submit" value="첨부하기" />
      </div>
      <Summery />

      <div className="publishBtn">
        <button
          onClick={(e) => {
            setPost(e.target.value);
          }}
        >
          저장하기
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Posting;
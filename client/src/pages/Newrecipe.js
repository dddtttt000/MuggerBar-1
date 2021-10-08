import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Finder from '../components/Finder';
import Summery from '../components/Summary';
import { CKEditor } from 'ckeditor4-react';
import Footer from '../components/Footer';

function Newrecipe() {

  const [post, setPost] = useState('');

  // function --> 기존 데이터 DB에 얘도 추가시키는 함수...How?

  return (
  <>
    <div>
      Navbar 자리 ( 이 페이지에 맞게 변경되어야 함 )
    </div>

    <Finder />
    <Summery />
    
    <CKEditor 
      data="This is an example CKEditor 4 WYSIWYG editor instance."
      type="classic"
      config={ { height: 750 },{ width: 700 }, { allowedContent: true } }
    />

    <div className="publish">
      <button onClick={ (e) => { setPost(e.target.value) } }>저장하기</button>
    </div>
    <Footer />
  </>
  )
};

export default Newrecipe;
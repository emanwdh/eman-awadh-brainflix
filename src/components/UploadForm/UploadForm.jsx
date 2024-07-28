import "./UploadForm.scss";
import { Link, useNavigate } from "react-router-dom";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import {useRef, useEffect} from "react";
import axios from "axios";

export default function UploadForm( {videoList, setVideoList}) {
  const navigate = useNavigate();
  const formRef = useRef();

  function UploadHandler() {
    alert("You have successfully uploaded your video!");
    const titleValue = formRef.current.title.value;
    const descValue = formRef.current.description.value;
    async function addVideo() {
      try{
        const response = await axios.post(`http://localhost:5050/videos/post`, {title: titleValue, description: descValue });
        console.log(response.data);
        setVideoList(response.data);
  

      }catch(error){
        console.error(error)
      }
    }
    addVideo();

  }

  return (
    <>
      <section className="upload-section section">
        <h1 className="upload-section__title section__title">Upload Video</h1>
        <form className="upload-form form" ref={formRef}>
          <div className="upload-form__upload-options">
            <div className="upload-form__add-thumbnail form__input-field">
              <label className="upload-form__label">Video Thumbnail</label>
              <img className="upload-form__thumbnail" src={Thumbnail} />
            </div>
            <div className="upload-form__text-options">
              <div className="upload-form__add-title form__input-field">
                <label className="upload-form__label ">Title Your Video</label>
                <input
                  type ="text"
                  className="upload-form__input"
                  placeholder="Add a title to your video"
                  id = "title"
                ></input>
              </div>
              <div className="upload-form__add-description form__input-field">
                <label className="upload-form__label">
                  Add a Video Description
                </label>
                <textarea
                  className="upload-form__text-area"
                  placeholder="Add a description to your video"
                  type ="text"
                  id ="description"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload-form__buttons">
            <Link
              className="button--link upload--link"
              to="/"
              onClick={UploadHandler}>
              <button
                className="upload-form__button button--post"
                type="submit">
                Publish</button>
            </Link>
            <Link className="cancel--link" to="/">
              <p className="upload-form__cancel">cancel</p>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

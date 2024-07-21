import "./UploadForm.scss"
import { Link, useNavigate } from "react-router-dom";
import Thumbnail from "../../assets/Images/Upload-video-preview.jpg";

export default function UploadForm() {

    const navigate = useNavigate();

    function UploadHandler() {
        alert("You have successfully uploaded your video!");
    };



    return (
        <>
        <section className="upload-section section">
            <h1 className="upload-section__title section__title">Upload Video</h1>
            <form className="upload-form form">
                <div className="upload-form__upload-options">
                    <div className="upload-form__add-thumbnail form__input-field">
                        <label className="upload-form__label">Video Thumbnail</label>
                        <img className="upload-form__thumbnail" src={Thumbnail}/>
                    </div>
                    <div className="upload-form__text-options">
                        <div className="upload-form__add-title form__input-field">
                            <label className="upload-form__label ">Title Your Video</label>
                            <input className="upload-form__input" placeholder="Add a title to your video"></input>
                        </div>
                        <div className="upload-form__add-description form__input-field">
                            <label className="upload-form__label">Add a Video Description</label>
                            <textarea className="upload-form__text-area" placeholder="Add a description to your video"></textarea>
                        </div>
                    </div>
                </div>
                <div className="upload-form__buttons">
                    <Link className="button--link upload--link" to="/" onClick={UploadHandler}><button className="upload-form__button button--post" type="submit">Publish</button></Link>
                    <Link className ="cancel--link" to="/"><p className="upload-form__cancel">cancel</p></Link>
                </div>
            </form>
        </section>
        </>
    );
}
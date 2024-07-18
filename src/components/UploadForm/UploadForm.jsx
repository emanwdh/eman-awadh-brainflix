import "./UploadForm.scss"
export default function UploadForm() {

    return (
        <>
        <section className="upload-section section">
            <h1 className="upload-section__title section__title">Upload Video</h1>
            <form className="upload-form form">
                <div className="upload-form__add-thumbnail form__input-field">
                    <label className="upload-form__label">Video Thumbnail</label>
                </div>
                <div className="upload-form__add-title form__input-field">
                    <label className="upload-form__label">Title Your Video</label>
                    <input></input>
                </div>
                <div className="upload-form__add-description form__input-field">
                    <label className="upload-form__label">Add a Video Description</label>
                    <input></input>
                </div>
            </form>
        </section>
        </>
    );
}
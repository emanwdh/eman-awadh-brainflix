import Header from "../../components/Header/Header";
import UploadForm from "../../components/UploadForm/UploadForm";


export default function UploadPage({videoList, setVideoList}) {

    return (
        <>
        <Header/>
        <UploadForm videoList={videoList}
        setVideoList={setVideoList}/>
        </>
    );
}
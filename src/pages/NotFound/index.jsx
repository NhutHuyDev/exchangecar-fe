import Footer from "../../components/Footer";
import MainNavbar from "../../components/Navbar";

function NotFound() {
    return (
        <>
            <MainNavbar />
            <div style={{marginTop: '80px'}} className="mb-5">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '400px',
                        height: '350px',
                        backgroundImage: 'url("/img/not-found.webp")',
                        backgroundSize: 'cover',
                    }}></div>
                    <h1>Không tìm thấy nội dung</h1>
                    <p>Trang bạn tìm kiếm có thể bị xóa hoặc không còn tồn tại</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
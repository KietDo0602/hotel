import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-secondary bg-primary text-accent">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Xin Lỗi!</h1>
        <p className="mt-4 text-2xl">
          Trang bạn cố truy cập không tồn tại, hoặc đã xảy ra lỗi
        </p>
        <p className="mt-2 text-lg">
          Xin vui lòng  quay lại trang chủ.
        </p>
        <button
          className="mt-8 px-6 py-3 text-lg font-semibold bg-secondary hover:bg-accent hover:text-secondary text-accent shadow-lg hover:shadow-xl"
          onClick={() => (window.location.href = '/')}
        >
          Trang Chủ
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

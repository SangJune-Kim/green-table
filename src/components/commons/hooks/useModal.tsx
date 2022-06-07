import Swal from "sweetalert2";

export function useModal() {
  const Success = (title: string, text: string) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "success",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Warning = (title: string, text: string) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const ModalError = (title: string, text: string) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "error",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Info = (title: string, text: string) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "info",
      confirmButtonColor: "#0fbaa3",
      showConfirmButton: true,
    });
  };

  const PromotionModal = () => {
    Swal.fire({
      width: 1000,
      imageUrl: "/img/Promotion/img-map-03.png",
      imageWidth: 900,
      confirmButtonColor: "#0fbaa3",
    });
  };

  return {
    Success,
    Warning,
    ModalError,
    Info,
    PromotionModal,
  };
}

// 사용 예제

// import { useModal } from "../../../commons/hooks/useModal";

// export default function MyPage() {
//   const { Success, Error } = useModal();

//   const onClickModal = () => {
//     Success("제목","텍스트");
//   };
//   const onClickWarning = () => {
//     Error("제목","텍스트");
//   };

//   return (
// <button onClick={onClickModal}>모달시험</button>
// <button onClick={onClickWarning}>모달시험2</button>
//   );
// }

export default function Modal({ children, show = false }) {
  if (show) {
    return (
      <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50">
          <div className="bg-white p-5 rounded container w-max mx-auto mt-[10%] bg-opacity-100">
            {children}
          </div>
        </div>
      </>
    )
  }
  return null;
}
const Loading = () => {
  return (
    <div className="m-5" id="loading" style={Loadingstyle}>
      <img src="/images/loading.gif" alt="Loading GIF" />
    </div>
  );
};

const Loadingstyle = {
  display: "block",
};

export default Loading;

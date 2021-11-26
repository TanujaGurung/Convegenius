const Category = (props) => {
  return (
    <div className="conatiner" style={{ alignSelf: "flex-end", width: "100%" }}>
      <div className="optionbox">
        <select
          className="nav-link"
          value={props.value}
          onChange={(e) => props.handleChangeEvent(e)}
        >
          <option value="products">Any Category</option>
          <option value="9">General Knownledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theaters</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="22">Sports</option>
          <option value="23">Geography</option>
          <option value="24">History</option>
          <option value="25">Politics</option>
          <option value="26">Sports</option>
          <option value="27">Art</option>
          <option value="28">Celebrities</option>
          <option value="29">Animals</option>
        </select>
      </div>
    </div>
  );
};
export default Category;

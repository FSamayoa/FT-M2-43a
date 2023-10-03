const validateName = (name) => {
    if (name.length < 5) {
      return "The name must be five characters long";
    } else if (name.length > 20) {
      return "The name must be less than twenty characters long";
    }
    return "";
  };
  
  const validateAge = (age) => {
    if (!/^\d+$/.test(age)) {
      return "Only numbers";
    } else if (age.length < 2) {
      return "The age must be two digits";
    }
    return "";
  };
  
  const validateSummary = (summary) => {
    if (summary.length < 50) {
      return "The summary must be fifty characters long";
    }
    return "";
  };
  
  const validateMovies = (movies) => {
    if (movies.length < 5) {
      return "The movies must be five characters long";
    }
    return "";
  };
  
  const validateImage = (image) => {
    if (!/^https?:\/\/\S+$/.test(image)) {
      return "The image must be a URL";
    }
    return "";
  };
  
  const Create = () => {
    const [input, setInput] = React.useState({
      name: "",
      movies: "",
      age: "",
      summary: "",
      image: "",
    });
  
    const [errors, setErrors] = React.useState({
      name: "",
      age: "",
      summary: "",
      movies: "",
      image: "",
    });
  
    // Solución alternativa: Utilizar useEffect para inicializar el estado
    React.useEffect(() => {
      setInput({
        name: "",
        movies: "",
        age: "",
        summary: "",
        image: "",
      });
    }, []); // Este efecto se ejecuta una sola vez al montar el componente
  
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
      setErrors({ ...errors, [name]: "" });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const nameError = validateName(input.name);
      const ageError = validateAge(input.age);
      const summaryError = validateSummary(input.summary);
      const moviesError = validateMovies(input.movies);
      const imageError = validateImage(input.image);
  
      if (nameError || ageError || summaryError || moviesError || imageError) {
        setErrors({
          name: nameError,
          age: ageError,
          summary: summaryError,
          movies: moviesError,
          image: imageError,
        });
      } else {
        dispatch(createActor(input));
      }
    };
  
    return (
      <form data-testid="Create" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
          />
          {errors.name && <div>{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="movies">Movies:</label>
          <input
            type="text"
            name="movies"
            value={input.movies}
            onChange={handleInputChange}
          />
          {errors.movies && <div>{errors.movies}</div>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={input.age}
            onChange={handleInputChange}
          />
          {errors.age && <div>{errors.age}</div>}
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            value={input.summary}
            onChange={handleInputChange}
          />
          {errors.summary && <div>{errors.summary}</div>}
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleInputChange}
          />
          {errors.image && <div>{errors.image}</div>}
        </div>
        <button type="submit">Create</button>
      </form>
    );
  };
  
  export default Create;
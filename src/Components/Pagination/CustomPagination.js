import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";


const darkTheme=createTheme({
    palette:{
    type:"dark",
    }
})
const CustomPagination = ({setPage, numberOfPages=10}) => {
  const handlePagination = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
    style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        marginTop:10,
        
    }}
    >
        <ThemeProvider theme={darkTheme}>
        <Pagination
      color="secondary"
        count={numberOfPages}
        onChange={(e) => handlePagination(e.target.textContent)}
      />
        </ThemeProvider>
      
    </div>
  );
};

export default CustomPagination;

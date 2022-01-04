import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import styled from "styled-components";
import Feedback from "../assets/Feedback.svg";
import { Paper, Grid, Box,TextField,TextareaAutosize } from "@mui/material";
import { Container, Row, Col, CustomButton, Input } from "./CommonComponents";

const StyledImg = styled.img`
  padding: auto;
  size:100%
  
`;
const Paper1=styled(Paper)`
    justify-content: center;
    padding: 32px;
`;
const Paper2=styled(Paper)`
    justify-content: center;
    padding: 32px;
    
`;
const LoginCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Container>
      <Row style={{paddingTop:"20px"}}>
            <Col md={5} sm={12}>
            <Paper2 elevation={6}>
                <StyledImg alt="" src={Feedback} />
               
                </Paper2>
        </Col>
        
    <Col md={7} sm={12} >
          <Paper2 elevation={6}>
          <h4>Rating</h4>
                    <Box
                    sx={{
                        
                        display: 'flex',
                        alignItems: 'center',
                        
                    }}
                    >
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                    </Box>
                  <>Your name</>
                  <br/><br/>
                  <TextField id="outlined-basic" label="name" variant="outlined"/><br/><br/>
                  <h4>Comment</h4>
                  <TextField fullWidth label="comment" id="fullWidth"  />
            </Paper2>
    </Col>
    </Row>
  </Container>
  );
}
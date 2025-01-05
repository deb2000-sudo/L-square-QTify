import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FaqSection.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
const FaqSection = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/faq';
  const [Faqs, setFaqs] = useState([]);
  const [FaqsLoader, setFaqsLoader] = useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      const faqsData = await performApiCall();
    };
    onLoadHandler();
  }, []);
  console.log(Faqs);

  const performApiCall = async () => {
    setFaqsLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setFaqsLoader(false);
      setFaqs(response.data.data); // Update with the actual data
    } catch (error) {
      setFaqsLoader(false);
      console.error('error in fetching data', error);
    }
  };
  return (
    <Box className="faq">
      <h1 className="faqText">FAQs</h1>
      {FaqsLoader ? (
        <Box className="loading">
          <CircularProgress sx={{ color: '#34C94B' }} />
          <p class="loadingText">Loading...</p>
        </Box>
      ) : (
        <Box className="accordionBox">
          {Faqs && Faqs.map((item,index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: 'black',
                borderRadius: 2,
                color: 'white',
                borderColor: 'white',
                border: 1,
                marginBottom:2,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: '#34C94B', fontSize: '40px' }} />
                }
                aria-controls="panel1-content"
                id={`panel-${item.id}-header`}
              >
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '20px',
                    padding:'16px',
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  color: 'black',
                  borderColor: 'white',
                  border: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '550',
                    fontSize: '18px',
                    lineHeight: '27px',
                    padding:'16px',
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default FaqSection;

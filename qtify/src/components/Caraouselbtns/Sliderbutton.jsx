import { Box } from '@mui/material';

const SlidePrevButton = ({swiperRef}) => {
  return (
    <Box
      onClick={() => swiperRef.current?.slidePrev()}
      height={48}
      width={48}
      position="absolute"
      left={2}
      top="45%"
      sx={{ 
        cursor: 'pointer',
        transform: 'translateY(-50%)',
        zIndex: 999,
        bgcolor: 'black',
        borderRadius: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="green"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
          fill="green"
          fillOpacity=".16"
          stroke="green"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="m14 16-4-4 4-4"
          stroke="green"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

const SlideNextButton = ({swiperRef}) => {
  return (
    <Box
      onClick={() => swiperRef.current?.slideNext()}
      height={48}
      width={48}
      position="absolute"
      right={16}
      top="45%"
      sx={{ 
        cursor: 'pointer',
        transform: 'translateY(-50%)',
        zIndex: 999,
        bgcolor: 'black',
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="green"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
          fill="green"
          fillOpacity=".16"
          stroke="green"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="m10 16 4-4-4-4"
          stroke="green"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export { SlideNextButton, SlidePrevButton };

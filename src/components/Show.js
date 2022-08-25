import { Grid, GridItem, Box, Image, Button } from '@chakra-ui/react';
import AlertComponent from './Alert';
import { useContext } from 'react';
import ShowsContext from '../context/showsContext';
import { Link } from 'react-router-dom';

const Show = () => {

  const showsContext = useContext(ShowsContext);
  const { shows } = showsContext;

  if(shows.length === 0) {
    return (
      <AlertComponent/>
    )
  }

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {shows.map((showData, index) => (
        <GridItem key={index}>
          <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
          >
            <Image
              src={
                showData.show.image == null
                  ? 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
                  : showData.show.image.original
              }
              alt={showData.show.name} />
            <Box p='6'>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {showData.show.name}
              </Box>
              <Link to={`/show/${showData.show.id}`}>
                <Button
                  colorScheme='green'
                  width="full"
                >
                  Ver más
                </Button>
              </Link>
            </Box>
          </Box>
        </GridItem >
      ))}
    </Grid>
  )
};

export default Show;
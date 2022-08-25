import { useContext } from 'react';
import ShowsContext from '../context/showsContext';
import { Button, FormLabel, FormControl, VStack, Box, Flex, Input, FormErrorMessage } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormSearch = () => {

  const showsContext = useContext(ShowsContext);
  const { getShows } = showsContext;

  const formik = useFormik({
    initialValues: {
      movie: ''
    },
    validationSchema: Yup.object({
      movie: Yup.string()
        .required('Este campo es obligatorio')
    }),
    onSubmit: values => {
      getShows(values.movie);
    }
  });

  return (
    <Flex align="center" justify="center">
      <Box bg="white" p={6} rounded="lg" border='1px' borderColor='black' width='50%'>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={formik.errors.movie}>
              <FormLabel htmlFor="movie">Search Movie</FormLabel>
              <Input
                id="movie"
                name="movie"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.movie}
                error={formik.errors.movie}
              />
              <FormErrorMessage>{formik.errors.movie}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Search
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
export default FormSearch;
import { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Image, Text, Box, Button, FormHelperText, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import logo from './assets/logo.png'
import axios from 'axios';
import './Suggestion.css'




const Suggestion = () => {
	const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
	const { name, email, message } = formData;
	const { register, formState: { errors }, handleSubmit } = useForm()
	const navigate = useNavigate()


	const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


	const onSubmit = (data) => {

		axios.post('http://localhost:3000/user/sendEmail', {name, email, message })
			.then((response) => {

				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener('mouseenter', Swal.stopTimer)
						toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				})
		
				Toast.fire({
					icon: 'success',
					title: 'Gracias por tu comentario!'
				})
			})
			.catch((error) => {
				console.error(error);
			});

		

		setTimeout(() => {
			navigate('/')
		}, 3000);
	}


	return <>
		<Box
			height="100%"
			minHeight={"100vh"}
			display={'flex'}
			flexDirection={{ base: 'column', md: 'row' }}

		>
			<Box
				width={{ base: '100%', md: '50%' }}
				display={'flex'}
				flexDirection={'column'}
				alignItems={'center'}
				// placeContent={'center'}
				// placeItems={'center'}
				gap={4}
				textAlign={'center'}
				justifyContent={'center'}
				// padding={4}
				paddingX={6}
			>
				<Box paddingX={6}>
					<Image
						boxSize='75px'
						objectFit='contain'
						src={logo} alt='Dan Abramov'
					/>
				</Box>
				<Box display={'grid'} gap={6}>
					<Text fontSize={'2xl'} >¡Tus opiniones importan!</Text>
					<Text fontSize={{ base: 'xl', md: 'md' }}>
						Tu opinión es fundamental para nosotros. En <b>Anahi Apartamentos</b>, valoramos y apreciamos cada una de tus sugerencias y comentarios, ya sean positivos o negativos. Nos esforzamos por brindar el mejor servicio posible, y tus reseñas nos ayudan a identificar áreas en las que podemos mejorar y a su vez, reconocer los aspectos en los que hemos tenido éxito.
					</Text>
					<Text fontSize={{ base: 'xl', md: 'md' }}>
						Si tienes alguna experiencia positiva que desees compartir con nosotros, nos encantaría escucharla. Nos impulsa saber que hemos cumplido tus expectativas y que nuestros esfuerzos están siendo reconocidos.
					</Text>
					<Text fontSize={{ base: '2xl', md: 'xl' }} color={'green.500'}>
						Gracias por tu apoyo.
					</Text>
				</Box>
			</Box>

			{/* FORM */}
			<Box
				width={{ base: '100%', md: '50%' }}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				padding={6}
				bg={'#0000007d'}
				backgroundImage={'https://scratch-house.com/wp-content/uploads/2021/10/Imagen-destacada.jpg'}
				bgSize="cover"
				bgPosition="center"
				bgRepeat="no-repeat"
				backgroundBlendMode={'darken'}
			>
				<Box
					width={'sm'}
					boxShadow={'md'}
					borderRadius={'md'}
					p={4}
					bg={'#ffffff'}
				>
					<form  className='form' onSubmit={handleSubmit(onSubmit)}>
						<FormControl display={'grid'} gap={2}>
							<FormLabel>Nombre y Apellido</FormLabel>
							<input 
								type="text" 
								name='name'
								onChange={handleInputChange} 
								placeholder='ex: John Wick' 
								required
							/>
							<FormLabel>Correo electrónico</FormLabel>
							<input 
								type="email" 
								name='email'
								onChange={handleInputChange}
								placeholder='ex: jhonwick@gmail.com' 
								required
							/>
							<FormLabel>Mensaje</FormLabel>
							<textarea 
							id="" 
							cols="20" 
							rows="6"
							onChange={handleInputChange}
							name="message" 
							placeholder='ex: increíble lugar!' 
							required
							>
							</textarea>
							<Button type="submit" colorScheme='green' _hover={{ bg: "green.300" }}>Enviar</Button>
						</FormControl>
					</form>
				</Box>
			</Box>
		</Box>
	</>
};


export default Suggestion;

﻿import { Grid, Box, AppBar, Toolbar, Button, Typography, CardMedia, Divider } from "@mui/material"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { ButtonStyled } from "../../Utils/CustomStyles";
import logo from "../../assets/logo.png";
import FormikControl from "../../components/Form/FormControl";
import { Formik, Form } from "formik";
import * as yup from "yup";
import banner from "../../assets/banner.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const LoginExterno = () => {

    const initialValues = {
        correo: "",
        contrasena: "",

    };

    const onSubmit = async (values) => {
        const dataLogin = JSON.stringify({
            Correo: values.correo,
            ContrasenaHash: values.contrasena,
        })
    }
    
    const validationSchema = yup.object({
        correo: yup
            .string()
            .email('Formato de email incorrecto')
            .required('Correo es requerido'),
        contrasena: yup
            .string()
            .max(20)
            .required('Contraseña requerido'),
    });


    return (

        <>
            <Box sx={{
                display: 'grid',
                height: '90vh',
                gridTemplateRows: 'auto 85% 15%',
                gridTemplateAreas: `"header header header header"
                                          "main  right right right"
                                          "footer footer footer footer"`,
            }}>


                <Grid sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>
                    <AppBar position="static">
                        <Toolbar sx={{ backgroundColor: '#253260' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image={logo}
                                    title="logo espol"
                                    sx={{ width: '130px' }}

                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', pl: 5 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                        Gestión

                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} >
                                        de Solicitudes

                                    </Typography>
                                </Box>


                            </Box>



                        </Toolbar>
                    </AppBar>
                </Grid>
                <Box sx={{
                    gridArea: 'main', display: 'flex',
                    alignItems: 'center', 
                   
                }}>

                    <Grid container direction="column" justifyContent="center" alignItems="center" >
                        <Grid item xs={12} sx={{ width: '50%', backgroundColor: "#fff", p: 2, boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}} >
                            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                                <Divider>
                                    <AccountCircleIcon />
                                </Divider>
                                <Formik
                                        initialValues={initialValues}
                                        onSubmit={onSubmit}
                                        validationSchema={validationSchema}

                                    >
                                        {(formik) => {
                                        return (
                                            <Box sx={{ display: 'flex', justifyContent: 'center', p:3 }}>
                                                    <Form>   
                                                        <FormikControl
                                                            control="input"
                                                            type="text"
                                                            label="Correo Electrónico"
                                                            name="correo"
                                                            target="Forms"
                                                        />

                                                        <FormikControl
                                                            control="input"
                                                            type="password"
                                                            label="Contraseña"
                                                            name="contrasena"
                                                            target="Forms"
                                                    />

                                                    <Box sx={{ display: "flex", flexDirection: "column" , pr: 3 }} >
                                                        <ButtonStyled variant="contained" type="submit" sx={{ mt: 2, width: '100%' }} >
                                                                Iniciar Sesión
                                                        </ButtonStyled>

                                                        
                                                        
                                                        <Typography sx={{ mt: 1, color: 'Denim' ,}} component={Link} to="/auth/register" variant="subtitle2">
                                                            Crear cuenta
                                                        </Typography>
                                                       
                                                    </Box>
                                                   

                                                    </Form>
                                                </Box>
                                            );
                                        }}
                                </Formik>

                                  
                            </Grid>
                           
                           
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    gridArea: 'right', 
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}>

                    
                </Box>
                <Box sx={{ gridArea: 'footer' }}>
                    <Grid item xs={12}>
                        <Footer></Footer>
                    </Grid>
                </Box>

            </Box>



        </>
    )
}

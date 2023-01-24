import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useState } from 'react'
import TextInputField from '../../components/TextInputField'
import CustomButton from '../../components/CustomButton'



const SignUpSchema = Yup.object().shape({


  username: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Name Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().min(5, ({ min }) => `Password must be at least ${min} Character`).required('Password Required ').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
    "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),

});

const SignUpScreen = ({ navigation }) => {



  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Formik
        validateOnMount={true}
        validationSchema={SignUpSchema}


        initialValues={{ username: '', email: '', phone: '', password: '' }}

        onSubmit={values => console.log(values)}

      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, isValid, errors }) => (

          <View style={{ flex: 1 }}>
            <TextInputField
              label={'User Name'}
              placeholder='Enter your User Name'

              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              error={(errors.username && touched.username) ? errors.username : null}

            />
            <TextInputField
              label={'Email'}
              placeholder='Enter your Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={(errors.email && touched.email) ? errors.email : null}


            />
            <TextInputField
              label={'Phone'}
              placeholder='Enter your Phone no'
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              secureTextEntry={true}
              error={(errors.phone && touched.phone) ? errors.phone : null}


            />
            <TextInputField
              label={'Password'}
              placeholder='Enter your Password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
              error={(errors.password && touched.password) ? errors.password : null}
            />

            <CustomButton
              isLoading={false}
              title='Signup'
              handleNavigation={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({})
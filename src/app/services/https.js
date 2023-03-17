import axios from 'axios';
export const authURL = "https://www.test.com/api/"
// import { store } from '../store/';

// export const AuthLogin = (url, data) => {
//     var bodyFormData = new FormData();
//     bodyFormData.append('client_id', 'roclient');
//     bodyFormData.append('client_secret', 'coreohomesecret');
//     bodyFormData.append('grant_type', 'password');
//     bodyFormData.append('username', data.username);
//     bodyFormData.append('password', data.password);
//     return axios.post(authURL + url, bodyFormData, { headers: {'Authorization': 'Basic Og==' }})
//     .then((response) => {
// 		return response;
//     }).catch((error) => {
//         handleError(error, authURL + url)
//     })
// }

 //export const baseURL = "http://192.168.43.76/pikatoo/api/"//"https://localhost:44351/"
 //export const ProductURL = "http://192.168.43.76/PikatooProduct/api/"//"https://localhost:44351/"

//  export const baseURL = "http://manojvgl-001-site4.ctempurl.com/api/"//"https://localhost:44351/"
//  export const ProductURL = "http://manojvgl-001-site4.ctempurl.com/api/"//"https://localhost:44351/"

 export const baseURL = "https://localhost:44379/api/"
 export const ProductURL = "https://localhost:44379/api/"


// export const baseURL = "http://manojvgl-001-site4.ctempurl.com/api/"
// export const ProductURL = "http://manojvgl-001-site4.ctempurl.com/api/"

export const userURL = "http://manojvgl-001-site4.ctempurl.com/api/"
//
// export const userURL = "http://manojvgl-001-site4.ctempurl.com/api/"//"https://localhost:44351/"
// export const AuthURL = "http://manojvgl-001-site4.ctempurl.com/connect/token"//"https://localhost:44351/"
//export const AuthURL = "http://192.168.43.76/PikatooAuth/connect/token"//"https://localhost:44351/"
// export const getAuthToken =   () => {
//   return axios.post(AuthURL,'client_id=PikatooClien234t&client_secret=Pikatoosecre435t&grant_type=client_credentials')
//   .then((resp) => {
   
//     console.log(resp); 
//     return resp;
//   })
//   .catch(function (error) {
    
//     console.log(error+userURL);
//   });
// }



export const ShopsGet =   (url) => {
  return axios.get(baseURL + url)
  .then((resp) => {
   
    console.log(resp.data);
    return resp;
  })
  .catch(function (error) {
    
    console.log(error);
  });
}
export const CategoryGet =   (url) => {
  return axios.get(ProductURL+ url)
  .then((resp) => {
  
   // console.log(resp.data);
    return resp;
  })
  .catch(function (error) {
   
    console.log(error);
  });
}
export const SubCategoryGet =   (url) => {
  
  return axios.get(ProductURL+ url)//
  
  .then((resp) => {
  
    console.log(ProductURL+ url);
  //  console.log(resp.data);
    return resp;
  })
  .catch(function (error) {
   
    console.log(ProductURL + url);
    console.log(error);
  });
}

export const ShopSubCategoryGet =   (url) => {
  
  return axios.get(baseURL+ url)//
  
  .then((resp) => {
  
    console.log(ProductURL+ url);
  //  console.log(resp.data);
    return resp;
  })
  .catch(function (error) {
   
    console.log(ProductURL + url);
    console.log(error);
  });
}

export const ShopProductsGet = (url,model) => {
      console.log(model);
  return axios.post(baseURL + url,{
    "subcatId": model.subcatId,
    "shopId": model.shopId
  })
  
  .then((resp) => {
  
    console.log(baseURL+ url);
  //  console.log(resp.data);
    return resp;
  })
  .catch(function (error) {
   
   console.log(baseURL + url);
    console.log(error);
  });
}
export const ShopProductsSearchPost = (url,model) => {
  console.log(model);
return axios.post(baseURL + url,model)

.then((resp) => {

console.log(baseURL+ url);
//  console.log(resp.data);
return resp;
})
.catch(function (error) {

console.log(baseURL + url);
console.log(error);
});
}
export const  AsyncGet = (url) => {

    console.log('am here AsyncGet ',url)
  return axios.get(baseURL+url).then((resp) => {
   
      return resp;
  }).catch((error) => {
      console.log(error,  baseURL+url);
  })
}

// export const getHeader = ()=>  {
//   let userState = store.getState().loginState;
//   let token = userState.access_token;
//   console.log(token)
//   if (token===undefined)
//   {
//     console.log('inside token is not available')
//     getAuthToken().then(resp => {
//       console.log('token is' +resp.data.access_token)
//       token=resp.data.access_token;
//     })
//     .catch(err => {
     
//       console.log(err);
//    //  dispatch(endLoading())
//     })

//   }
//   let authHeader = token ? {
//       Authorization: 'Bearer ' + token
//   } : {}
//   return {
//       headers: authHeader
//   }
// }


export const AsyncProductGet = (url) => {
  return axios.get(ProductURL+url).then((resp) => {
      return resp;
  }).catch((error) => {
      console.log(error,  url);
  })
}
export const AsyncSMSPost = (url, data) => {//
  return axios.post(userURL + url, data).then((resp) => {
      return resp;
  }).catch((error) => {
    console.log(error, baseURL+ url+'here it is');
      //handleError(error, ProductURL + url);
  })
};

export const AsyncPost = async (url, data) => {//
  try {
    const resp = await axios.post(baseURL + url, data);
    return resp;
  } catch (error) {
    console.log(error, baseURL + url + 'here it is');
  }
};

export const AsyncUserVerifyPost = (url, data) => {
  return axios.post(userURL + url, data).then((resp) => {
      return resp;
  }).catch((error) => {
    console.log(error, userURL+ url);
      //handleError(error, ProductURL + url);
  })
};

export const AsyncUserProfilePost = (url, data) => {
  return axios.post(userURL + url, data).then((resp) => {
      return resp;
  }).catch((error) => {
    console.log(error, userURL+ url);
      //handleError(error, ProductURL + url);
  })
};

// export const ValidateUser = (url, data) => {
//   return axios.get(baseURL + url, data, getHeader()).then((resp) => {
//       return resp;
//   }).catch((error) => {
//       handleError(error, getModuleURL + url);
//   })
// }
export const ValidateUser = (url, data) => {
return axios.get(baseURL+ url,data)
.then((resp) => {
 
  //console.log(resp.data);
  return resp;
})
.catch(function (error) {
 
  console.log(error +  baseURL+ url );
})
}
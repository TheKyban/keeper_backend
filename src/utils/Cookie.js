export const Cookie = (res,name,token,time) => {
    return res.cookie(name,token,{
        // httpOnly:true,
        expires:new Date(Date.now() + 1000 * 60 * time)
    })
}
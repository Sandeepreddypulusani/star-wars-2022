export const sortDateAsc = (a, b) => {
    const date1 = new Date(a.publish_date).getTime();
    const date2 = new Date(b.publish_date).getTime();
    return Math.sign(date1 - date2);
  };
  
  export const sortDateDesc = (a, b) => {
    const date1 = new Date(a.publish_date).getTime();
    const date2 = new Date(b.publish_date).getTime();
    return Math.sign(date2 - date1);
  };

  export const convertStringtoImgName = (value) => {
    if(value) {
        return value.toLowerCase().split(" ").join("-");
    }
    return undefined
  }
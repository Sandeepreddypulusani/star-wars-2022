import {
    convertStringtoImgName,
    sortDateAsc,
    sortDateDesc
  } from "./general";
  
  const data = [
    {
      title: "Harry Potter",
      publish_date: "1974",
    },
    {
      title: "The Great Gatsby",
      publish_date: "December 14, 2007",
    },
    {
      title: "The Lord of the Rings",
      publish_date: "May 2003",
    },
  ];

  // convert any given value into lower case and remove space with -
  test("convertStringtoImgName function to retun expected output", () => {
    const value="Sky Walker";
    const imgName = convertStringtoImgName(value);
    expect(imgName).toEqual("sky-walker");
  })
  
  test("sortDateAsc function to return expected output", () => {
    const sortDateAscData = data.sort(sortDateAsc);
    const expectedOutput = [
      {
        title: "Harry Potter",
        publish_date: "1974",
      },
      {
        title: "The Lord of the Rings",
        publish_date: "May 2003",
      },
      {
        title: "The Great Gatsby",
        publish_date: "December 14, 2007",
      },
    ];
    expect(sortDateAscData).toEqual(expectedOutput);
  });
  
  test("sortDateDesc function to return expected output", () => {
    const sortDateDescData = data.sort(sortDateDesc);
    const expectedOutput = [
      {
        title: "The Great Gatsby",
        publish_date: "December 14, 2007",
      },
      {
        title: "The Lord of the Rings",
        publish_date: "May 2003",
      },
      {
        title: "Harry Potter",
        publish_date: "1974",
      },
    ];
    expect(sortDateDescData).toEqual(expectedOutput);
  });

export async function PATCH (request, { params }) {
  const body =await request.json()
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  
   comments[index] = {
    text : body.text
   }

  return Response.json({
    message: "Comment Updated",
    comments
  });
}

export async function DELETE(request, { params }) {
    const newComments = comments.filter((c) => c.id !== parseInt(params.id))
    return Response.json({
        message: "Comment Deleted",
        newComments
      });
}

const comments = [
  {
    id: 1,
    text: "Comment 1",
  },
  {
    id: 2,
    text: "Comment 2",
  },
  {
    id: 3,
    text: "Comment 3",
  },
];

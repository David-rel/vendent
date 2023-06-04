const faunadb = require("faunadb");

const secret = process.env.NEXT_PUBLIC_FUANA_DB_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

async function getAllUsers() {
  try {
    const response = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("vendent"))),
        q.Lambda((x) => q.Get(x))
      )
    );

    console.log(response.data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getAllUsers();

import UploadWidget from "@/components/UploadWidget";
import { CloudinaryContext } from "cloudinary-react";
import { Image as CloudinaryImage } from "cloudinary-react";

const [uploadedImagePublicId, setUploadedImagePublicId] = useState(null);

{
  uploadedImagePublicId && (
    <CloudinaryContext
      cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`}
    >
      <CloudinaryImage publicId={uploadedImagePublicId} />
    </CloudinaryContext>
  );
}

<UploadWidget
  onUpload={(error, result) => {
    if (result.event === "success") {
      setUploadedImagePublicId(result.info.public_id);
    }
  }}
>
  {({ open }) => {
    function handleOnClick(e) {
      e.preventDefault();
      open();
    }
    return <button onClick={handleOnClick}>Upload an Image</button>;
  }}
</UploadWidget>;

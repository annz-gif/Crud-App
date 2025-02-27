CRUD Application with Next.js 14 and MongoDB
An end-to-end CRUD (Create, Read, Update, Delete) web application built with Next.js 14, MongoDB, and Tailwind CSS. The app lets users manage products, featuring dynamic routing, API integration, and a sleek responsive UI.

🔧 Framework: Next.js 14
📂 Database: MongoDB
🎨 Styling: Tailwind CSS

🚀 Features
Product Management: Add, view, edit, and delete products.
API Routes: Handle data operations with serverless API functions.
Dynamic Routing: Edit products using dynamic routes.
Stylish UI: Gradient backgrounds with pastel buttons.
🖼️ Screenshots
Home Page	Product List
Add Product	Edit Product
🏗️ Project Structure

⚡ Setup Instructions
Clone the repository:
bash
Copy
Edit
git clone https://github.com/annz-gif/test.git
cd crud-app
Install dependencies:
bash
Copy
Edit
npm install
Set up environment variables:
Create a .env.local file:
ini
Copy
Edit
MONGODB_URI=mongodb://127.0.0.1:27017/nextjs14
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Run the development server:
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

Build for production (if deploying):
bash
Copy
Edit
npm run build
🚀 Deployment (Vercel)
Push your code to GitHub.
Connect your repository to Vercel.
Add environment variables in Vercel Dashboard → Settings → Environment Variables.
Trigger a deployment — and you're live! 🎉
🛠️ API Routes
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add a new product
PUT	/api/products/[id]	Update a product by ID
DELETE	/api/products/[id]	Delete a product by ID
Example API request (add product):

javascript
Copy
Edit
fetch('/api/products', {
  method: 'POST',
  body: JSON.stringify({ name: 'New Product', price: 100 }),
});
🚀 What You’ll Learn
Full-stack development with Next.js.
Connecting MongoDB using Mongoose.
Dynamic routing, server actions, and API handling.
Styling with Tailwind CSS and modern design patterns.
🤩 Future Improvements
Image Uploads: Add support for product images.
Pagination & Search: Improve the product listing UX.
Authentication: Secure routes with user login.
🤝 Contributing
Fork the repository
Create a feature branch:
bash
Copy
Edit
git checkout -b feature-name
Commit your changes:
bash
Copy
Edit
git commit -m "Add feature"
Push to GitHub:
bash
Copy
Edit
git push origin feature-name
Create a Pull Request
📜 License
This project is licensed under the MIT License.

✨ Author
👩‍💻 Developed by Aanshi Rakesh Kumar
🔗 GitHub: annz-gif


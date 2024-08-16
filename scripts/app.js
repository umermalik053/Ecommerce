import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

const auth = getAuth();
const db = getFirestore();

// Sign up
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('Signup successful!');
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('Login successful!');
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = 'login.html';
        });
    });
}

// Dashboard
const postForm = document.getElementById('postForm');
if (postForm) {
    postForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        await addDoc(collection(db, "posts"), {
            title,
            content,
            uid: auth.currentUser.uid
        });

        loadPosts();
    });
}

// Load posts

// let blogs = document.querySelector("#blogs")
async function onload (){
   
    const blogsDiv = document.getElementById('blogs');
    
    
    if (blogsDiv) {
        
        blogsDiv.innerHTML = '';
        const querySnapshot = await getDocs(collection(db, "posts"));
    
        querySnapshot.forEach((doc) => {
            const postData = doc.data();
            const post = document.createElement('div');
            post.classList.add('blog-post');
            post.innerHTML = `
                <h3 class="content">${postData.title}</h3>
                <p class="content">${postData.content}</p>
            `;
            blogsDiv.appendChild(post);
        });
    }
}
document.addEventListener('DOMContentLoaded', async () => {
    onload();
});
 
async function loadPosts() {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';

    const q = query(collection(db, "posts"), where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);


    querySnapshot.forEach((doc) => {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h3 class="content">${doc.data().title}</h3><p class="content">${doc.data().content}</p>`;
        postsDiv.appendChild(post);
    });
}

// Auth state observer

onAuthStateChanged(auth, (user) => {
    

const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const dashboardBtn = document.getElementById('dashboardBtn');


    if (user) {
        if (window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html')) {
            window.location.href = 'dashboard.html';
        } else if (window.location.pathname.includes('dashboard.html')) {
            loadPosts();
        }
    } else {
        if (window.location.pathname.includes('dashboard.html')) {
            window.location.href = 'login.html';
        }
    }
});


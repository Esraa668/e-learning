import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
    title: 'Home',
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/components/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
    title: 'Courses',
  },
  {
    path: 'teachers',
    loadComponent: () =>
      import(
        './components/components/all-teachers/all-teachers.component'
      ).then((m) => m.AllTeachersComponent),
    title: 'Teachers',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/components/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
    title: 'About Us',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/components/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
    title: 'Contact Us..',
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./components/components/all-blogs/all-blogs.component').then(
        (m) => m.AllBlogsComponent
      ),
    title: 'Blogs',
  },
  {
    path: 'sign',
    loadComponent: () =>
      import('./components/components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    title: 'Sign up',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    title: 'Log In',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

<!-- src/components/StudentList.vue -->
<template>
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Grade</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.fname }}</td>
            <td>{{ student.lname }}</td>
            <td>{{ student.grade }}</td>
            <td>{{ student.gender }}</td>
            <td>
              <button @click="deleteStudent(student.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        students: [],
      };
    },
    methods: {
      async fetchStudents() {
        const querySnapshot = await getDocs(collection(db, 'studenttable'));
        this.students = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      },
      async deleteStudent(studentId) {
        try {
          await deleteDoc(doc(db, 'studenttable', studentId));
          console.log('Student deleted successfully!');
          this.fetchStudents();
        } catch (error) {
          console.error('Error deleting student:', error);
        }
      },
      // Implement editStudent method if needed
    },
    mounted() {
      this.fetchStudents();
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here if needed */
  </style>
  
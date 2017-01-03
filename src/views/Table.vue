<template>
  <div>
    <p>Hello in Table.Vue</p>

    <el-table :data="tableData" style="width: 100%">
<el-table-column prop="date" label="Date" width="180">
</el-table-column>
<el-table-column prop="name" label="Name" width="180">
</el-table-column>
<el-table-column prop="address" label="Address">
</el-table-column>
</el-table>

</div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'table',
    data() {
      return {
        tableData: [],
      };
    },
    created() {
      axios.get('/api/table').then(
        (response) => { this.tableData = response.data; })
        .catch((error) => { console.log(error); });
    },
  };
</script>
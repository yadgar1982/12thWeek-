const URL_EndP =  "http://localhost:3000/posts"

$.get(URL_EndP).then(data=>console.log(data));

//get DATA
$.get(URL_EndP).then (data=> {
    data.map (book =>{

        $("tbody").append(

            $(`<tr>
            <td class=form-group>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
            <button class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button>
            </td>
            <td></td>
            </tr>
        `)
    )
    })
})
$("#submitBook").click(function (){
    $.post(URL_EndP,{
        title: $("#title").val(),
        author: $("#author").val(), 
    })
});

// with this function we delete the record
function deleteBook(id){
    $.ajax(`${URL_EndP}/${id}`, {
    method:"DELETE"
    });
};
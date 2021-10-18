# draft
import java.text.SimpleDateFormat
import java.util.*

fun main() {
    println(SimpleDateFormat("dd/MM/yyyy").format(convertDate("2020-12-02")))
}

fun convertDate(inputDate:String): Date {
    return SimpleDateFormat("yyyy-MM-dd").parse(inputDate)
    edditting

}

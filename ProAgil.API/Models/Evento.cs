namespace ProAgil.API.Models
{
    public class Evento
    {
        public int eventoId { get; set; }
        public string imagemUrl { get; set; }
        public string local { get; set; }
        public string dataDoEvento { get; set; }
        public string tema { get; set; }
        public int quantidadeDePessoas { get; set; }
        public string lote { get; set; }
    }
}
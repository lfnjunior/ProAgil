using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProAgil.Api.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }

        [Required (ErrorMessage="Campo Obrigatório")]
        [StringLength (100, MinimumLength=3, ErrorMessage="Local é entre 3 e 100 Caracters")]
        public string Local { get; set; }
        public string DataDoEvento { get; set; }

        [Required (ErrorMessage="O Tema deve ser Preeenchido")]
        public string Tema { get; set; }
        
        [Range(2, 120000, ErrorMessage="Quatidade de Pessoas é entre 2 e 120000")]
        public int quantidadeDePessoas { get; set; }
        public string ImagemUrl { get; set; }

        [Phone (ErrorMessage="Deve ser um telefone válido")]
        public string Telefone { get; set; }
        
        [EmailAddress (ErrorMessage="Deve ser um e-mail válido")]
        public string Email { get; set; }
        public List<LoteDto> Lotes { get; set; }
        public List<RedeSocialDto> RedesSociais { get; set; }
        public List<PalestranteDto> Palestrantes { get; set; }        
    }
}
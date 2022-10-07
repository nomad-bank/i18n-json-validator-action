## What`s this?

Action para fazer as validações nescessárias no arquivo JSON que será enviado para o bucket do S3 e posteriorment consumido pelo app mobile como fonte dos textos apresentados usando o `i18n` como ferramente de internacionalização.

## Inputs

Nessa action usamos apenas um input:

- `json_path` : Indica o caminho relativo do arquivo json onde deverá ocorrer a validação e checagens de formatação.

## Outputs

Temos dois parâmetros de saída:

- `isValid`: Parâmetro do tipo **_boolean_** que indica se o arquivo JSON passado no input está válido ou não.
- `errors`: String que quando o JSON for inválido, retorna os erros encontrados.

## How to use

Veja abaixo uma forma simplificada de como utilizar essa action no seu projeto:

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: Validate i18n JSON file
    steps:
      - name: Validate JSON step
        id: validate
        uses: nomad-bank/i18n-json-validator-action@v0.1.2
        with:
          json_path: "/relative/path/to/file.json"
      - name: Get the output isValid
        run: echo "Validation success = ${{ steps.validate.outputs.isValid }}"
      - name: Get the output errors
        if: ${{steps.validate.outputs.isValida == 'false'}}
        run: echo "Errors = ${{steps.validate.outputs.errors}}" && exit 1
```

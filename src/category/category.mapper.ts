import { Category } from './category.entity'
import { CategoryCreateInput } from './dto/category-create.input'

export class CategoryMapper {
  public static toEntity(input: CategoryCreateInput): Category {
    const entity = new Category()
    entity.name = input.name
    entity.slug = GenerateSlug(input.name)

    return entity
  }
}

function GenerateSlug(str: string): string {
  const acentos = [
    'ç',
    'Ç',
    'á',
    'é',
    'í',
    'ó',
    'ú',
    'ý',
    'Á',
    'É',
    'Í',
    'Ó',
    'Ú',
    'Ý',
    'à',
    'è',
    'ì',
    'ò',
    'ù',
    'À',
    'È',
    'Ì',
    'Ò',
    'Ù',
    'ã',
    'õ',
    'ñ',
    'ä',
    'ë',
    'ï',
    'ö',
    'ü',
    'ÿ',
    'Ä',
    'Ë',
    'Ï',
    'Ö',
    'Ü',
    'Ã',
    'Õ',
    'Ñ',
    'â',
    'ê',
    'î',
    'ô',
    'û',
    'Â',
    'Ê',
    'Î',
    'Ô',
    'Û'
  ]

  const semAcento = [
    'c',
    'C',
    'a',
    'e',
    'i',
    'o',
    'u',
    'y',
    'A',
    'E',
    'I',
    'O',
    'U',
    'Y',
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U',
    'a',
    'o',
    'n',
    'a',
    'e',
    'i',
    'o',
    'u',
    'y',
    'A',
    'E',
    'I',
    'O',
    'U',
    'A',
    'O',
    'N',
    'a',
    'e',
    'i',
    'o',
    'u',
    'A',
    'E',
    'I',
    'O',
    'U'
  ]

  for (let i = 0; i < acentos.length; i++) {
    str = str.replace(acentos[i], semAcento[i])
  }

  const caracteresEspeciais = [
    '¹',
    '²',
    '³',
    '£',
    '¢',
    '¬',
    'º',
    '¨',
    '"',
    "'",
    '.',
    ',',
    '-',
    ':',
    '(',
    ')',
    'ª',
    '|',
    '\\\\',
    '°',
    '_',
    '@',
    '#',
    '!',
    '$',
    '%',
    '&',
    '*',
    ';',
    '/',
    '<',
    '>',
    '?',
    '[',
    ']',
    '{',
    '}',
    '=',
    '+',
    '§',
    '´',
    '`',
    '^',
    '~'
  ]

  for (let i = 0; i < caracteresEspeciais.length; i++) {
    str = str.replace(caracteresEspeciais[i], '')
  }

  return str.trim().toLowerCase().replace('  ', ' ').replace(' ', '-')
}

import formatResponse from '../utils/formatResponse';

export const checkResult = async (req, res) => {
  return res.status(200).json(formatResponse(200, 'result', true, { passed: true }));
};

export const sealResults = async (req, res) => {
  return res.status(200).json(formatResponse(200, 'will seal result', true, { sealed: true }));
};

export const unsealResults = async (req, res) => {
  return res.status(200).json(formatResponse(200, 'will unseal result', true, { unsealed: true }));
};

export const publishResults = async (req, res) => {
  return res.status(200).json(formatResponse(200, 'will publish result', true, { published: true }));
};
